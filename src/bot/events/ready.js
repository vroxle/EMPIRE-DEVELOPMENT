const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async (client) => {
  client.Ready = true;
  client.user.setActivity("motchys ticket bot", { type: "CODING", url:"https://discord.gg/eryzKqVDMN" }).then(() => {
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag);
  });
  client.RegisterSlashCommands();
};
