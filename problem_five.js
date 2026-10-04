function validateSchema(obj, schema) {
    const errors = [];

    for (const key of Object.keys(schema)) {
        if (!Object.hasOwn(obj, key)) {
            errors.push(key + ': missing property');
        } else if (typeof obj[key] !== schema[key]) {
            errors.push(
                key + ': expected ' + schema[key] + ', got ' + typeof obj[key]
            );
        }
    }

    return errors;
}