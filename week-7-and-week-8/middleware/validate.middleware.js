const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    // abortEarly: false → show ALL errors at once, not just first one

    if (error) {
      const errors = error.details.map((e) => e.message);
      return res.status(400).json({ success: false, errors });
    }
    next();
  };
};

export default validate;
