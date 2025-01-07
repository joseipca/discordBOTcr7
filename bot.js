// Importa a biblioteca discord.js
const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');

require('dotenv').config();

// Cria uma nova instância do cliente do Discord
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Configuração e registro de comandos de barra
const commands = [
    new SlashCommandBuilder().setName('cr7').setDescription('Responde com Heil Hitler, SIIUUU!'),
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

client.once('ready', async () => {
    try {
        console.log('Registrando comandos de barra globalmente...');
        // Registro global do comando
        await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
        console.log('Comando registrado globalmente com sucesso!');
    } catch (error) {
        console.error('Erro ao registrar comando global:', error);
    }
    console.log(`Bot está online! Logado como ${client.user.tag}`);
});

// Evento: escuta mensagens enviadas no servidor
client.on('messageCreate', async message => {
    // Evita que o bot responda a si mesmo
    if (message.author.bot) return;

    // Responde a uma saudação
    const saudacoes = [
        'piroca', 'alheira', 'pila', 'penis',
        'boi', 'diz', 'nazi', 'hitler',
        'oi', 'ola', 'boas', 'hi', 'hey', 'sup',
        'nigga', 'nigger', 'gay', 'lgbt',
        'atrasado', 'retardado', 'puta', 'cona',
        'cunt', 'bolas', 'testiculos', 'morcela',
        'doki', '?', 'merda', 'preto', '2550c01', 'Pong!',
        "fds", "burro", "diz", "entao", "cala-te", "calate",
        "wtf", "pretas", "lol", "rabo", "cu", "menor",
        "caralho", "burro", "rape", "pascal", "fodeu", 
        "foda", "merda", "ping", "focinho", "tromba", "trombas",
        "macaco", "putas", "puta", "gayzolas", "cornos", "cornudo",
        "heil", "ronaldo", "cristiano", "niggas", "gordo", "fat",
        "gordos", "gordas", "gorda", "goat", "cancer", "cancro",
        "2550c01", "boda"
    ];

    const responses = [
        "Stfu! You are a retarded nigga",
        "Your mom",
        "Gayzolas",
        "No one likes you",
        "BLM (Black Lives Merda)",
        "HEIL HITLER CARALHOOOOO",
        "Volta Salazar",
        "No one cares",
        "Calado eras poeta",
        "És incrível, incrivelmente burro",
        "És um preto de merda",
        "Quem diz é quem é",
        "Burro do caralho",
        "Queres fazer algo útil? Cala-te",
        "Wow parabéns, és o maior. Que ser humano incrível. O pináculo do seu espécime. Melhor mesmo é só se te calares",
        "Porque não pegas nisso que disseste, divides em sílabas métricas, pegas em cada uma das letras e as enfias pelo cu acima?"
    ];

    // GIF responses
    const gifResponses = [
        "https://media.discordapp.net/attachments/922208501684645938/1054200520413302824/caption.gif?ex=677dcd3e&is=677c7bbe&hm=cceb36c58e17e279f0e2bdd195767c85c68c67050ea2322e78c82be11a9088dc&",
        "https://cdn.discordapp.com/attachments/845784297109323798/1245902841290428488/caption.gif?ex=677c7af1&is=677b2971&hm=973c1c0a4cd305813d0950c34eb1426378977a425a89647a73932fbc70ed3e3a&",
        "https://media.discordapp.net/attachments/1104200487131160636/1106678200123269182/63a987e7-ab42-4ed3-8857-527603dcf57d-1.gif?ex=677ce4a3&is=677b9323&hm=9c76aba0411c8f80a5221c145511d00fa32a2428a6a3438f753055b43af75a01&=&width=480&height=480",
        "https://media.discordapp.net/attachments/950852496669167616/964322085038063676/caption.gif?ex=677c75ed&is=677b246d&hm=f8c99a7025fe2da24633933515c71b1422bc22a44f6c6c386244369ee7ccfd25&=&width=456&height=908",
        "https://media.discordapp.net/attachments/1060640927422615656/1136914087398355084/caption-3.gif?ex=677ccec1&is=677b7d41&hm=f3216bac21c57a1baa008e073db827b5a779255a92f9b2692b1136ef691e8f4a&=&width=996&height=858",
        "https://media.discordapp.net/attachments/946105006094946304/964407816116895824/image0.gif?ex=677cc5c5&is=677b7445&hm=64a726ac98af5100d3084e1e93ad3b7bcd0dbea11f082b4916ce605220f4ac42&=&width=908&height=908",
        "https://media.discordapp.net/attachments/813811391626477650/1311455386686980166/giphy-downsized-large.gif?ex=677cfec1&is=677bad41&hm=de2425d601032b2a37ca5640783f0531ef1089651bc11f518f7d6d9633e46284&=&width=752&height=720",
        "https://media.discordapp.net/attachments/1205096777775185935/1267507706604949637/attachment-1-1.gif?ex=677ca2ca&is=677b514a&hm=370374b6f4db1b2c734d2605b5d4f57c9d7e3621e2445d57f920e3f4f6c66c4c&=&width=494&height=394",
        "https://media.discordapp.net/attachments/759111906551922762/1209653250215649302/snapchat-caption.gif?ex=677c70e1&is=677b1f61&hm=32015d9e1f1676dee1bc4318239072d2a72359d97a7ab5f036980c46981b631a&=&width=744&height=908",
        "https://media.discordapp.net/attachments/813811391626477650/1279579663915683952/caption.gif?ex=677d0c2d&is=677bbaad&hm=3c9e52b461906b96d0990dbea0548bcdb48e739a5fe6c142f2e94de9492fd37c&=&width=718&height=908",
        "https://media.discordapp.net/attachments/1112515589206978673/1199296318728851536/caption.gif?ex=677cfebc&is=677bad3c&hm=ce0343252f712b80c1a1ff000ee368003bb4c5798d748d286c74936f415d4e3b&=&width=762&height=908",
        "https://media.discordapp.net/attachments/800666369901068329/1283449794517405878/y38Ny-.gif?ex=677ca004&is=677b4e84&hm=c325d0ffd87a1305cc38fea72218952205ace18d97bfe363c6e922d222bf0487&=&width=640&height=360",
        "https://media.discordapp.net/attachments/1265352346876121209/1265703175802064906/ezgif.com-crop.gif?ex=677ca9b0&is=677b5830&hm=d73245141c7de3296b4bfb45144024eaafba0f15db3517d7582b9fcc1fce6d0d&=&width=934&height=744",
        "https://media.discordapp.net/attachments/384483439308701696/1324516753912631370/giphy.gif?ex=677d0d1a&is=677bbb9a&hm=d8f63bdf31e76925a540c17b69348877d40372cbae80a6b88e15d72f48cf4d5e&=&width=900&height=900",
        "https://tenor.com/view/portugal-gif-25623724",
        "https://tenor.com/view/lebron-lebron-james-diddy-diddy-party-sean-combs-gif-4104351489513445035",
        "https://media.discordapp.net/attachments/1056644997514006619/1144046750731092038/attachment.gif?ex=677d0c50&is=677bbad0&hm=01d7a1642c2c0e28a309ab46df8eeee6de4639527089b82f505d9aab1ecf06f5&",
        "https://tenor.com/view/winking-jesus-smile-happy-whos-your-daddy-gif-15914158",
        "https://tenor.com/view/el-circo-whatsapp-llamada-xd-gif-27214359",
        "https://media.discordapp.net/attachments/1098009267967107133/1137217624644792400/FB0641C3-C53E-4DA4-BDE9-B31470313F06.gif?ex=677c97f2&is=677b4672&hm=96ad245cda112832994fd64cba4a11dddfec138addc390fc2a444e3cf941b1a3&",
        "https://media.discordapp.net/attachments/880962277619138614/1051217320074285156/togif.gif?ex=677d7eeb&is=677c2d6b&hm=fa8dc22d02c8f674dda0db65aa86f6b60862ba180ded8a2184c1e96cddd28520&",
    

    ];

   // Check if any trigger word is present in the message
   if (saudacoes.some(word => message.content.toLowerCase().includes(word))) {
    // 50% chance to send either text or GIF
    if (Math.random() > 0.5) {
        // Send random text response
        const randomText = responses[Math.floor(Math.random() * responses.length)];
        message.channel.send(`${randomText}`);
    } else {
        // Send random GIF response
        const randomGif = gifResponses[Math.floor(Math.random() * gifResponses.length)];
        message.channel.send(randomGif);
    }
}
});

// Evento: responder ao comando de barra
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'cr7') {
        await interaction.reply('Heil Hitler, SIIUUU!');
    }
});

client.once('ready', () => {
    console.log('Bot está online!');
});

client.login(process.env.BOT_TOKEN);