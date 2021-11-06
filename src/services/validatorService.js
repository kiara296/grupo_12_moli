const validatorService = {

  isNullOrUndefined: (param) => {
    return param === null || param === undefined;
  },
};

module.exports = validatorService;
