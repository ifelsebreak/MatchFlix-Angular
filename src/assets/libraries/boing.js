export const Spring = (x, y, mass, stiffness, viscosity) => ({
  prevX: x,
  prevY: y, 
  currX: x,
  currY: y,
  mass, stiffness, viscosity
});

Spring.copy = (spring) => ({
  prevX: spring.prevX,
  prevY: spring.prevY,
  currX: spring.currX,
  currY: spring.currY,
  mass: spring.mass,
  stiffness: spring.stiffness,
  viscosity: spring.viscosity
});

Spring.set = (spring, x, y) => {
  spring.prevX = x;
  spring.prevY = y;
  spring.currX = x;
  spring.currY = y;
  return spring;
}

// Accelerate spring end a new position
Spring.acc = (spring, x, y) => {
  spring.currX = spring.currX + x;
  spring.currY = spring.currY + y;
  return spring;
}

// Shift particle location
Spring.shift = (spring, x, y) => {
  spring.prevX = spring.currX;
  spring.prevY = spring.currY;
  spring.currX = x;
  spring.currY = y;
  return spring;
}

// Verlet-integrate a particle's momentum.
Spring.integrate = (spring) => Spring.shift(
  spring,
  spring.currX + ((spring.currX - spring.prevX) * (1.0 - spring.viscosity)),
  spring.currY + ((spring.currY - spring.prevY) * (1.0 - spring.viscosity))
);

// Calculate the mangitude of a vector (length)
// Returns a Number
const mag = (x, y) => Math.sqrt((x * x) + (y * y));

const hookeForce = (n, mass, dist, stiffness, deltaT) => {
  const force = ((dist / (dist * (1.0 / mass))) * stiffness);
  // Apply force to location to get acceleration
  const acc = (((-1 * n) * (force * (1.0 / mass))) * (deltaT / 16));
  return acc;
};

Spring.isResting = (spring) => (
  Math.abs(spring.currX) < 0.1 &&
  Math.abs(spring.currY) < 0.1 &&
  Math.abs(spring.currX - spring.prevX) < 0.1 &&
  Math.abs(spring.currY - spring.prevY) < 0.1
);

// Advance spring to next state. Mutates spring.
// If you want new state objects every time, use Spring.copy, then pass in
// copied spring.
Spring.tick = (spring, deltaT) => {
  // Calculate Euclidian distance (2D length) of a spring.
  const dist = mag(spring.currX, spring.currY);

  const x = hookeForce(
    spring.currX, spring.mass,
    dist, spring.stiffness, deltaT
  );

  const y = hookeForce(
    spring.currY, spring.mass,
    dist, spring.stiffness, deltaT
  );

  Spring.acc(spring, x, y);

  // If we're close enough to resting, just set to 0.
  if (Spring.isResting(spring)) Spring.set(spring, 0, 0);

  return spring;
};

Spring.simulate = (spring, deltaT) =>
  Spring.tick(Spring.integrate(spring), deltaT);
