/* Nathan Witt — a quiet, woven orbital field. No dependencies. */
(() => {
  'use strict';

  const canvas = document.getElementById('security-field');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const motionButton = document.getElementById('motion-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const TAU = Math.PI * 2;
  const bands = 12;
  const camera = 7.8;
  let width = 0;
  let height = 0;
  let compact = false;
  let points = [];
  let edges = [];
  let projected = [];
  let frameId = 0;
  let lastTime = 0;
  let elapsed = 0;
  let onScreen = true;
  let enabled = !reducedMotion.matches;
  let motionRevision = 0;
  let externalControlTime = -Infinity;
  let hasMotionChoice = false;
  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

  function buildSculpture() {
    const steps = compact ? 136 : 208;
    const sides = compact ? 8 : 12;
    points = [];
    edges = [];

    // A continuous trefoil, wrapped in a fine circular lattice. The tube frame
    // follows its tangent, so the filaments stay smooth through every crossing.
    for (let i = 0; i < steps; i += 1) {
      const t = (i / steps) * TAU;
      const c2 = Math.cos(2 * t);
      const s2 = Math.sin(2 * t);
      const c3 = Math.cos(3 * t);
      const s3 = Math.sin(3 * t);
      const radius = 1.18 + 0.48 * c3;
      const cx = radius * c2;
      const cy = radius * s2;
      const cz = 0.48 * s3;
      let tx = -1.44 * s3 * c2 - 2 * radius * s2;
      let ty = -1.44 * s3 * s2 + 2 * radius * c2;
      let tz = 1.44 * c3;
      const tangentLength = Math.hypot(tx, ty, tz);
      tx /= tangentLength;
      ty /= tangentLength;
      tz /= tangentLength;
      const normalLength = Math.hypot(tx, ty);
      const nx = ty / normalLength;
      const ny = -tx / normalLength;
      const bx = -tz * ny;
      const by = tz * nx;
      const bz = tx * ny - ty * nx;

      for (let j = 0; j < sides; j += 1) {
        const u = (j / sides) * TAU;
        const thickness = 0.112;
        const cu = Math.cos(u) * thickness;
        const su = Math.sin(u) * thickness;
        points.push({
          x: cx + nx * cu + bx * su,
          y: cy + ny * cu + by * su,
          z: cz + bz * su,
          accent: j === 0 || j === Math.floor(sides / 2),
          bright: i % 13 === 0 && j % 3 === 0,
        });
        const here = i * sides + j;
        edges.push([here, ((i + 1) % steps) * sides + j, j % 3 === 0]);
        // Slightly quieter meridians leave the surface airy and transparent.
        if (i % 2 === 0) edges.push([here, i * sides + (j + 1) % sides, false]);
      }
    }
    projected = points.map(() => ({ x: 0, y: 0, z: 0, perspective: 1 }));
  }

  function transform(x, y, z, rotation) {
    const y1 = y * rotation.cx - z * rotation.sx;
    const z1 = y * rotation.sx + z * rotation.cx;
    const x2 = x * rotation.cy + z1 * rotation.sy;
    const z2 = -x * rotation.sy + z1 * rotation.cy;
    const x3 = x2 * rotation.cz - y1 * rotation.sz;
    const y3 = x2 * rotation.sz + y1 * rotation.cz;
    const perspective = camera / (camera - z2);
    return {
      x: width * 0.5 + x3 * rotation.scale * perspective,
      y: height * 0.49 + y3 * rotation.scale * perspective,
      z: z2,
      perspective,
    };
  }

  function drawOrbit(rotation, foreground) {
    const orbitSteps = compact ? 120 : 180;
    const paths = Array.from({ length: 4 }, () => new Path2D());
    let previous = null;
    for (let i = 0; i <= orbitSteps; i += 1) {
      const t = (i / orbitSteps) * TAU;
      // An interrupted tilted orbit, intentionally offset from the knot.
      const x = 1.99 * Math.cos(t);
      const y = 1.99 * Math.sin(t) * 0.76;
      const z = 1.99 * Math.sin(t) * 0.65;
      const p = transform(x, y, z, rotation);
      if (previous && (p.z >= 0) === foreground && i % 32 < 27) {
        const band = Math.min(3, Math.max(0, Math.floor((p.z + 2.1) / 4.2 * 4)));
        paths[band].moveTo(previous.x, previous.y);
        paths[band].lineTo(p.x, p.y);
      }
      previous = p;
    }
    ctx.lineWidth = 0.65;
    paths.forEach((path, i) => {
      ctx.strokeStyle = `rgba(181, 205, 165, ${0.055 + i * 0.027})`;
      ctx.stroke(path);
    });

    const markers = [0.38, 2.87, 4.94];
    for (const t of markers) {
      const p = transform(1.99 * Math.cos(t), 1.99 * Math.sin(t) * 0.76,
        1.99 * Math.sin(t) * 0.65, rotation);
      if ((p.z >= 0) !== foreground) continue;
      ctx.beginPath();
      ctx.arc(p.x, p.y, foreground ? 2 : 1.35, 0, TAU);
      ctx.fillStyle = foreground ? 'rgba(204, 231, 174, 0.78)' : 'rgba(204, 231, 174, 0.23)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, foreground ? 5.8 : 4, 0, TAU);
      ctx.strokeStyle = 'rgba(192, 229, 140, 0.12)';
      ctx.stroke();
    }
  }

  function draw() {
    if (!width || !height) return;
    ctx.clearRect(0, 0, width, height);
    const unit = Math.min(width, height);
    const yaw = 0.34 + elapsed * 0.053 + pointer.x * 0.18;
    const pitch = 0.87 + Math.sin(elapsed * 0.072) * 0.09 + pointer.y * 0.14;
    const roll = -0.38 + Math.sin(elapsed * 0.041) * 0.1;
    const rotation = {
      cx: Math.cos(pitch), sx: Math.sin(pitch),
      cy: Math.cos(yaw), sy: Math.sin(yaw),
      cz: Math.cos(roll), sz: Math.sin(roll),
      scale: unit * 0.235,
    };

    // The broad, extremely soft halo is painted onto a transparent canvas.
    const halo = ctx.createRadialGradient(width * 0.5, height * 0.49, unit * 0.08,
      width * 0.5, height * 0.49, unit * 0.47);
    halo.addColorStop(0, 'rgba(144, 178, 111, 0.032)');
    halo.addColorStop(0.65, 'rgba(144, 178, 111, 0.018)');
    halo.addColorStop(1, 'rgba(144, 178, 111, 0)');
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, width, height);
    drawOrbit(rotation, false);

    for (let i = 0; i < points.length; i += 1) {
      const point = points[i];
      projected[i] = transform(point.x, point.y, point.z, rotation);
    }
    const ivoryPaths = Array.from({ length: bands }, () => new Path2D());
    const greenPaths = Array.from({ length: bands }, () => new Path2D());
    for (const [a, b, accented] of edges) {
      const p = projected[a];
      const q = projected[b];
      const band = Math.min(bands - 1, Math.max(0,
        Math.floor(((p.z + q.z) * 0.5 + 1.9) / 3.8 * bands)));
      const path = accented ? greenPaths[band] : ivoryPaths[band];
      path.moveTo(p.x, p.y);
      path.lineTo(q.x, q.y);
    }
    for (let band = 0; band < bands; band += 1) {
      const depth = band / (bands - 1);
      ctx.lineWidth = 0.43 + depth * 0.31;
      ctx.strokeStyle = `rgba(227, 234, 216, ${0.042 + depth * 0.405})`;
      ctx.stroke(ivoryPaths[band]);
      ctx.strokeStyle = `rgba(192, 229, 140, ${0.0825 + depth * 0.72})`;
      ctx.stroke(greenPaths[band]);
    }

    const pointPaths = Array.from({ length: bands }, () => new Path2D());
    for (let i = 0; i < points.length; i += 1) {
      if (i % (compact ? 3 : 2) !== 0) continue;
      const p = projected[i];
      const band = Math.min(bands - 1, Math.max(0, Math.floor((p.z + 1.9) / 3.8 * bands)));
      const radius = (points[i].bright ? 1.4 : 0.6) * p.perspective;
      pointPaths[band].moveTo(p.x + radius, p.y);
      pointPaths[band].arc(p.x, p.y, radius, 0, TAU);
    }
    for (let band = 0; band < bands; band += 1) {
      ctx.fillStyle = `rgba(224, 241, 201, ${0.1 + band / (bands - 1) * 0.8})`;
      ctx.fill(pointPaths[band]);
    }
    drawOrbit(rotation, true);
  }

  function canAnimate() {
    return enabled && onScreen && !document.hidden && width > 0 && height > 0;
  }

  function tick(timestamp) {
    frameId = 0;
    if (!canAnimate()) {
      lastTime = 0;
      return;
    }
    const delta = lastTime ? Math.min(0.04, (timestamp - lastTime) / 1000) : 0;
    lastTime = timestamp;
    elapsed += delta;
    const easing = 1 - Math.exp(-delta * 3.2);
    pointer.x += (pointer.targetX - pointer.x) * easing;
    pointer.y += (pointer.targetY - pointer.y) * easing;
    draw();
    frameId = requestAnimationFrame(tick);
  }

  function syncAnimation() {
    if (canAnimate()) {
      if (!frameId) frameId = requestAnimationFrame(tick);
    } else {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
      lastTime = 0;
    }
  }

  function setMotion(value, userChoice = true) {
    enabled = Boolean(value);
    motionRevision += 1;
    if (userChoice) hasMotionChoice = true;
    if (motionButton) motionButton.setAttribute('aria-pressed', String(enabled));
    if (!enabled) {
      pointer.x = 0;
      pointer.y = 0;
      pointer.targetX = 0;
      pointer.targetY = 0;
    }
    syncAnimation();
    draw();
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(0, rect.width);
    height = Math.max(0, rect.height);
    const nextCompact = width < 480 || window.innerWidth < 640;
    if (!points.length || compact !== nextCompact) {
      compact = nextCompact;
      buildSculpture();
    }
    const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
    syncAnimation();
  }

  canvas.addEventListener('pointermove', (event) => {
    if (!enabled || event.pointerType === 'touch') return;
    const rect = canvas.getBoundingClientRect();
    pointer.targetX = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
    pointer.targetY = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
  }, { passive: true });
  canvas.addEventListener('pointerleave', () => {
    pointer.targetX = 0;
    pointer.targetY = 0;
  });

  if (motionButton) {
    motionButton.setAttribute('aria-pressed', String(enabled));
    motionButton.addEventListener('click', (event) => {
      const revisionBeforeHandlers = motionRevision;
      const eventTime = event.timeStamp > 1e12
        ? event.timeStamp - performance.timeOrigin
        : event.timeStamp;
      // A page-level controller may call the public API in its own click
      // handler. Only apply our fallback if no controller has handled it.
      queueMicrotask(() => {
        if (motionRevision === revisionBeforeHandlers && externalControlTime < eventTime) {
          setMotion(!enabled);
        }
      });
    });
  }

  window.addEventListener('portfolio:motion', (event) => {
    if (event.detail && typeof event.detail.enabled === 'boolean') {
      externalControlTime = performance.now();
      setMotion(event.detail.enabled);
    }
  });
  window.portfolioArt = Object.freeze({
    setMotion: (value) => {
      externalControlTime = performance.now();
      setMotion(value);
    },
  });

  document.addEventListener('visibilitychange', syncAnimation);
  if ('IntersectionObserver' in window) {
    const visibilityObserver = new IntersectionObserver((entries) => {
      onScreen = entries[0].isIntersecting;
      syncAnimation();
    }, { rootMargin: '40px', threshold: 0 });
    visibilityObserver.observe(canvas);
  }
  if ('ResizeObserver' in window) {
    new ResizeObserver(resize).observe(canvas);
  } else {
    window.addEventListener('resize', resize, { passive: true });
  }
  const handleMotionPreference = () => {
    if (!hasMotionChoice) setMotion(!reducedMotion.matches, false);
  };
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', handleMotionPreference);
  else reducedMotion.addListener(handleMotionPreference);
  resize();
})();
