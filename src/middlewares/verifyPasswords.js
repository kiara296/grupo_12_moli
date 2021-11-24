

const verifyPasswords = (req, res, next) => {
    const pssw = req.body.pass;
    const psswConfirm = req.body.pass_confirm;

    if(pssw == psswConfirm) {
        next();
    } else {
        let errors = null;
        let data = null;
        res.render('regmoli', { errors, data: req.body, message: '* Las contraseñas deben ser iguales' });
    }
}

module.exports = verifyPasswords;