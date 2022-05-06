import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category:'Testing',
    description:'Sends an embed',

    permissions: ["ADMINISTRATOR"],

    callback:({ message, text}) =>{
        const embed = new MessageEmbed()
        .setDescription("Hello World!")
        .setTitle('Title')
        .setColor('RED')
        .setAuthor('Montek')
        .setFooter('Footer')
        .addFields([
            {
                name:'name',
                value: 'value',
                inline: true,
            },
            {
                name:'name2',
                value: 'value2',
                inline: true,
            },
        ])
        .addField('name3','value3')

        return embed
    }
} as ICommand