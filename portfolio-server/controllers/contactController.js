const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/contacts.json");

const saveContact = (req, res) => {
  const { name, email, subject, message } = req.body;

  const data = JSON.parse(fs.readFileSync(filePath));

  const newContact = {
    id: Date.now(),
    name,
    email,
    subject,
    message,
    createdAt: new Date(),
  };

  data.push(newContact);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(201).json({
    success: true,
    message: "Message Saved",
  });
};

const getContacts = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));

  res.json(data);
};

module.exports = {
  saveContact,
  getContacts,
};