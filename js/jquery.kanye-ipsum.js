(function($) {
    log();
    
    $.fn.kanye = function(options) {
        $(this).each(function() {
            var preKanyeText = $(this);
            var opts = $.extend({}, $.fn.kanye.defaults, options);

            n = opts.length === 'short' ? 18 : 10;
            var kanyeText = $.fn.kanye.quotes[opts.length][rand(n)];
            kanyeText = opts.explicit === false ? filter(kanyeText) : kanyeText; 
            kanyeText = opts.angry === true ? kanyeText.toUpperCase() : kanyeText;
            
            preKanyeText.addClass('kanye-ipsum');
            preKanyeText.text(kanyeText);
            preKanyeText.html(preKanyeText.text());
            return this;
        });
    };
    
    $.fn.kanye.defaults = {
        angry: false,
        explicit: true,
        length: 'short'
    };
    
    $.fn.kanye.quotes = {
        short: [
            "You ain't been doin the education Sway.",
            "The other side is so, so, so, so strong in trying to beat down, and demonize and dishumanize – and I don’t know if that’s a word or not, and if it’s not a word, then I said it’s a fucking word.",
            "Put this in the magazine: There's nothing more to be said about music. I'm the fucking end-all, be-all of music.",
            "Jay is Kweli's favorite rapper, 50 is Eminem's favorite rapper, and I'm my favorite rapper.",
            "A lot of people were wondering what I was going to do if I didn't win anything. I guess we'll never know.",
            "I am so credible and so influential and so relevant that I will change things.",
            "Yo Taylor, I'm really happy for you, I'll let you finish, but Beyonc&#233; has one of the best videos of all time. One of the best videos of all time!",
            "I don't even listen to rap. My apartment is too nice to listen to rap in.",
            "I actually don't want to win anymore Grammy's because I got 10, and that's the perfect number.",
            "Sometimes I get emotional over fonts.",
            "My music isn't just music: it's medicine.",
            "'Everything I'm not made me everything I am.' In my humble opinion, that's a prophetic statement. Ghandi would have said something like that.",
            "Come on now! How could you be me and want to be someone else?",
            "When I think of competition it's like I try to create against the past. I think about Michelangelo and Picasso. You know, the pyramids.",
            "I'm the No. 1 living and breathing rock star.",
            "When someone comes up and says something like, 'I am a god', everybody says 'Who does he think he is??'. I just told you who I thought I was. A god.",
            "For me to say I wasn't a genuis, I would just have to be lying to you and myself.",
            "I'm like a vessel, and God has chosen me to be the voice and the connector."
        ],
        rant: [
            "The problem I have with the paparazzi is if they&#39;re right in front of you and you&#39;re like, “Can you please not take a picture of me?” And they&#39;re like, “Dude I&#39;m not really taking a picture,” and they just keep on doing it like they’re talking to me like I’m stupid and stuff, and then, with arm sprints, I’m going to grab the camera, that just happens, and you don’t expect that to happen with a celebrity, cause you think they&#39;re like a museum animal and stuff, but it’s like, don’t shoot the animals, then, maybe, I don’t know.",
            "I feel like if a rapper disses me, they're just trying to get a rise out of me and get me to play in their field to find some way that they can beat me. I feel like there's a lot of rappers that can beat me in ignorance. So why would I play a sport that I'm not particularly trying to get better at or beaten in? There's a lot of rappers that can beat me in ignorance, but there's only a few that can play with true intellect. How fucking perfect is that fucking answer?!",
            "Last time I got here, before I even arrived, they had ‘fuck Kanye’ on the motherfuckin’ port-a-potties. But this year, we gon’ piss on ‘em, on they motherfuckin’ port-a-potties. How many of y'all don't give a fuck about what the press say? It's 2014. College Dropout came out 2004. I want y'all to know, every time I go to the studio, every time I do an interview, every time I make a motherfuckin' t-shirt, the thing I do, I give it everything I got. And when I talk that shit, it's so that you can talk that shit. If you a fan of me, you a fan of your motherfuckin' self. You can do something that'll change the world. Look at how they try to make me look. They try to make me look crazy.",
            "I need a new cool. What's the new shit out? What's the new shit out with the most commercials at the Super Bowl? Let's just stop the music and play a Bruno Mars song right now, how about that? They told me I would never play at the Super Bowl. They told me I could never play at the Super Bowl. Not until I'm super old. Not until I'm super old … They told me I would never play at the Super Bowl. They told me I would never play at the Super Bowl, at least not until I'm super old. So I think it's time&#150hold up, f&#151k that toast.",
            "I know people get mad at me when I compare myself, but that's the only way I can explain what my aspirations are. When I'm talkin' 'bout Walt Disney, when I'm talkin' 'bout Howard Hughes, when I'm talkin' 'bout Henry Ford, when I'm talkin' 'bout Beethoven, when I talk about Mozart, when I talk about Shakespeare, and they all had their time on this earth. And I'm only 37. And right now I'm rockin' to 90,000, of y'all motherfuckers right now. So I ain't goin' at anybody on the radio. I'm goin' after Shakespeare. I'm goin' after Walt Disney. I'm going after Howard Hughes. I'm going after David Stern. I'm goin' after Henry Ford. I'm going after Elon Musk. Okay, he is living, but he's my boy.",
            "You ain't got the answers man! You ain't got the answers! (Kanye) You ain't got the answers, Sway! (Kanye) I been doing this more than you! (Doing what more than me?) You ain't got- (C'mon, chill out, bro!) You ain't got the answers! (Kanye, relax!) You ain't got the answers! (Bro, rela- I'm asking you a question!) You ain't been doing the education. (Bro!) You ain't been doing the education! (Kanye, calm down!) You don't have the answers though. (Calm down!) Because you trying to give me advice about something- (No! No no no no, listen) You ain't- You ain't got the answers! You ain't spend 13 million dollars of your own money trying to empower yourself!",
            "I think that&#39;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it&#39;s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.",
            "It&#39;s mixing creativity with the fight like an athlete. Like it&#39;s okay for the athletes to fight and push it, but they want the creative people to shut-up and be quiet. But these are the people with the real ideas that can actually change, can reorganize, can design cities, can restructure a curriculum, you know, can make life easier. And that&#39;s the part of the game I want to be in: the making life more awesome.",
            "My greatest power…I’m not a billionaire. I may not be the richest person on the planet. I might not be the most attractive guy. I might be the most liked, but, I right now, because of ‘New Slaves’, and because of the position I’ve always taken, have the most powerful voice by a mile. By a mile. And I’m gonna use that…I’ve got a trillion dollars worth of voice!",
            "Now, you can see my face on the Internet every motherfucking day. I came here, I open up a motherfucking mountain…and you tryin&#39; tell me how to give you my art. Now tell me something, ya&#39;ll want me to do this show the way I would do this show? Don’t fucking heckle me. I&#39;m Kanye motherfucking West."
        ]
    };
    
    function filter(text) {
        var regex = /shit|fuck/ig;      
        var new_text = text.replace(regex, function(s) {
            var i = 0;
            var stars = '';
            while (i < s.length) {
                stars += '*';
                i++;
            } 
            return stars;
        });       
        return new_text;
    }
    
    function rand(n) {
        return Math.floor(Math.random() * n);
    }
    
    function log() {
        console.log(" __  ___      ___      .__   __. ____    ____  _______     __  .______     _______. __    __  .___  ___.");
        console.log("|  |/  /     /   \\     |  \\ |  | \\   \\  /   / |   ____|   |  | |   _  \\   /       ||  |  |  | |   \\/   |");
        console.log("|  '  /     /  ^  \\    |   \\|  |  \\   \\/   /  |  |__      |  | |  |_)  | |   (----`|  |  |  | |  \\  /  |");
        console.log("|    <     /  /_\\  \\   |  . `  |   \\_    _/   |   __|     |  | |   ___/   \\   \\    |  |  |  | |  |\\/|  |");
        console.log("|  .  \\   /  _____  \\  |  |\\   |     |  |     |  |____    |  | |  |   .----)   |   |  `--'  | |  |  |  |");
        console.log("|__|\\__\\ /__/     \\__\\ |__| \\__|     |__|     |_______|   |__| | _|   |_______/     \\______/  |__|  |__|");
        console.log('%cBrought to you by Ty-Lucas Kelley', 'color: #6f096f');   
    }
}(jQuery));
