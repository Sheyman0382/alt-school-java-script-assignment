function diffObjects(oldObj, newObj) {
    const added = {};
    const removed = {};
    const changed = {};

    // Find added and changed properties
    for (const key of Object.keys(newObj)) {
        if (!Object.hasOwn(oldObj, key)) {
            added[key] = newObj[key];
        } else if (oldObj[key] !== newObj[key]) {
            changed[key] = {
                from: oldObj[key],
                to: newObj[key]
            };
        }
    }

    // Find removed properties
    for (const key of Object.keys(oldObj)) {
        if (!Object.hasOwn(newObj, key)) {
            removed[key] = oldObj[key];
        }
    }

    return {
        added: added,
        removed: removed,
        changed: changed
    };
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }