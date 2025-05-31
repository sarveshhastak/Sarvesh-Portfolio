const asyncHandler = require("express-async-handler")
const Form = require("../models/Form")
const sendEmail = require("../utils/email")

exports.formControl = asyncHandler(async (req, res) => {
    const result = await Form.create(req.body)
    await sendEmail({
        from: result.email,
        to: `${process.env.EMAIL}`,
        subject: "WE Would Like To Connect With You",
        message: `Hi [Mr.Sarvesh Hastak],

I ${result.name} recently came across your profile and was genuinely impressed by your projects.

As a fellow developer, I’m always looking to connect, share ideas, and learn from talented individuals in the community. I’d love to stay in touch and possibly collaborate or exchange insights in the future.

If you're open to it, I’d be glad to connect and learn more about your work.
DESCRIPTION:-  ${result.desc}


Best regards,  
${result.name}  
Full Stack Developer  
${result.email} 
`
    })
    res.json({ message: "New Interest Arrived" })
})