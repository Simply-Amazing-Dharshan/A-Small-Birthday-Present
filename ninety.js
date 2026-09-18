const categories = document.querySelector(".categories");
const reasonPage = document.querySelector(".reason-page");
const reasonText = document.querySelector(".reason-text");
const reasonCount = document.querySelector(".reason-count");
const backButton = document.querySelector(".back-button");
const reasonTitle = document.querySelector(".reason-header h2");
const reasonIcon = document.querySelector(".reason-icon");

const buttons = document.querySelectorAll(".category-card button");

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        reasonTitle.textContent = card.querySelector("h2").textContent;
        reasonIcon.textContent = card.querySelector(".category-icon").textContent;

        if (category === "happy") {
            currentReasons = happyReasons;
        }

        if (category === "appearance") {
            currentReasons = appearanceReasons;
        }

        if (category === "friends") {
            currentReasons = friendReasons;
        }

        if (category === "traits") {
            currentReasons = traitReasons;
        }

        if (category === "company") {
            currentReasons = companyReasons;
        }

        if (category === "us") {
            currentReasons = smallThingsReasons;
        }

        if (category === "occur") {
            currentReasons = futureReasons;
        }

        currentReason = 0;

        categories.style.display = "none";

        reasonPage.style.display = "block";

        showReason();

        window.scrollTo(0, 0);

    });

});

const happyReasons = [
    "I love your smile. It's cute, charming and steals my heart everytime",
    "I love how excited you get when you are happy. It makes me feel excited too.",
    "I love how silly and whimsical you get, it's sooo cuteee I’ll die of cuteness overload 😭",
    "I love the vocal stims you do when you get happy and excited, ahhh I already love your voice so this makes me melt 🫠",
    "I love the things that make you happy. I love Makka Pakka, our plushie family, the cute gifs and stickers, Milk and Mocha, Movies that make u feel happy, surprises that make you feel happy",
    "I just wanna hug you tight in excitement when you get happy hehe, but I gotta be gentle with my fairy hehe",
    "I love how you say Medu a lot when you are happy hehe. I mean you say Medu a lot anyways Suziee, but I still love you calling me Medu happily ☺️",
    "Whenever you are happy I just feel like I have to treasure those moments. I love myself when you are happy, especially because of me. And I love that your happiness makes me love myself and be happy too",
    "I love how you go hehe when you are happy. Makes me go hehe too, even tho I told you I’ll try to be haha.",
    "I love how confident, bright and warm you are and feel to me when you are happy.",
    "Some days may feel hard Suziee, but that just means more days are to come when it'll be all sunshine and Makka Pakka. Keep a gentle smile and don't stress about things hehe, it’ll all be fine and worth it at the end . You already are a driven person, I’ll love it if you can keep moving forward with happiness."
];


const appearanceReasons = [
    "Before anything specific, omg damn Suziee you are the cutest, most gorgeous, most hot, most beautiful woman to have ever lived. I love that hehe.",
    "I love your hair, you cute curly hair. I fell in love with them again when you cut it short, it suits you really well. I just feel like I want to pat your head and run my fingers through those lovely hair.",
    "I really love it when you style your hairs as bangs, like that pic with the muga saree hehe. OMG you look soo gorgeous with that",
    "I love your eyebrows. Unlike mine they suit you really well hehe, they are light but they accentuate your looks, whether you go for a happy look or a bolder confident one",
    "I love your eyelashes and the eye makeup you do hehe. You are soo damn good at doing those eye makeups. I mean it must be time consuming to do them but they suit you really well, especially when you use that pink eye glitter with a blush, I looveeee that one.",
    "I love your eyes Suziee. I love how cute and round they are, and how they just pull me even when looking at the screen. It shows so many of your emotions, your confidence, your happiness, etc .. I just wanna keep looking in your eyes and lose myself",
    "I love your nose. Idk why you are insecure about it, it looks really cuteee and I just wanna keep booping your nose in surprise hehe",
    "I love the blush makeup you do on your cheeks. It makes you look sooooo gorgeous every damn time, and elevates your look into the fashion Queen you are. Legit I have underrated the blush in the past ngl, its a game changer overall",
    "I love your cheeks hehe, they are cute, a bit chubby (which Is awesomeee, I hope they get more chubby hehe) so that I can massage them or pinch them gently hehe, my poookieeee",
    "I love your lips. I love the cupid’s bow your lips form as you have said, and they have been torturing me cruelly, shaking my neural block like an earthquake. Damn those lips, too hot 😭",
    "And on top of those lips you apply your lip makeup, you don't know how many times my heart has stopped when I look. Oh damn, they elevate how hot and gorgeous you are. Blush + eye makeup + lipstick is such a deadly combo. Also I liked how you managed without a lipstick on that party day hehe, your lips still were just as heartstopping that day",
    "I love your ears. I love the earrings you put on, it matches your outfit and the look for the day really well. I love how you slide your hair behind your ears when you take videos, OMG if one day I get a chance to just see you doing it irl I’ll actually die there 😭.",
    "I love the sense of fashion you have. I love how much attention you give to details. I think this has what made me attentive to appearances too, the thoughts and efforts behind these details.",
    "I love the dresses you choose. I don't know for sure if every attire will suit you, but goddamn every attire you choose suits you Suziee. I really love the sarees, the muga silk ones, and even the casual jeans and trousers you style with.",
    "I loved that time when you had nail extenders hehe, they looked great! I love how you wear matching watches, necklaces and bracelets. You accessorize really well Suziee. It just adds those little but important things into your overall look.",
    "I love how you pose, how you take pics and how you find amazing backgrounds and objects to do so with. Overall I love how you look soo much, and I love how much thought and effort you put behind them."
];

const friendReasons = [
    "I love how much of a listener you are. You aren't just listening you know, you pick up the details, remember them really well and make me feel heard.",
    "I love how considerate you are as a person. Contrary to what you say, that you are clingy and stuff, I think you are a really understanding person.",
    "I love how stern you are. Maybe many won't like this but I love you for this. I love how you are able to point my mistakes in the face. It makes me realise about things I have to improve about myself",
    "I love how funny you are. I love the jokes you make. I love the puns you make. I love how you have taught me humor throughout our relationship.",
    "I love how good you roast people hehe. I love when you tease and roast me too. Makes me more carefree hehe. Makes me less anxious too.",
    "I love how caring and empathetic you are to me. That day when you were sad about my sister made me realise just how empathetic of a person you are.",
    "I love how you are able to keep up conversations and make them flow naturally hehe. I don't realise the time spent at all when chatting with you.",
    "I love how helpful you are. Sharing notes, giving me study advice, giving me pointers and directions on fashion, diet, etc..",
    "I love how uplifting you can be when I feel down and sad. You bring me joy so effortlessly Suziee.",
    "I love how trustworthy you are as a friend. I feel like I can trust you with anything hehe. You know so many secrets of mine by now hehe",
    "I love spending time with you Suziee. You have introduced so many fun ideas with the movie/music nights, game nights, the questions.. it has helped us both know each other’s tastes really well hehe.",
    "I love the daily gossip and fun tidbits of your life, and also your vulnerable, sad and emotional bits of your life. I love how you are able to share them all with me. I hope I keep the space we have secure for you to keep sharing",
    "You are the best friend I can ever ask for Suziee. You put so much time, energy and work to maintain our friendship. You make me feel soo happy Suziee. You are the bestest bestie ever hehe.",
    "I love us sharing our joys, sorrows, mundanities, interests, hobbies, passions and so much more freely. I hope we can keep this up for a long time.",
    "I love the hugs and headpats you give me Suziee. Im greedy for more of em hehe."
];


const traitReasons = [
    "I love how much of a troll you are to other people. I love that ragebaiting aspect of you hehe. I laugh soo much hearing your stories of ragebaits and trolls",
    "I love how you don't hesitate to speak up about things. I loved when u actually told that guy about his acanthosis nigricans.",
    "I love how you are able to dedicate yourself for something, whether it be studies or art or games too! I worry a lot when u stress about studies, but a part of me also is in love with you for taking things so seriously.",
    "I love how you fight back against people who wrong you. You aren't a people pleaser like Kaju. You have your boundaries and your No’s.",
    "And in fighting back, I love how cool you are in those situations hehe. I'm someone who usually never fights back against anything, and you inspire me a lot.",
    "I love how you dont back down from a challenge. I loved the fact that you went back to Kota as a revenge against the city itself hehe. Damn when you narrated that for the first time I was absolutely floored. That's real resilience, you know.",
    "I love how resilient and strong of a woman you are. You have faced so many challenges, so many bad things, so many betrayals and yet you hold on so strong. I love that you are strong.",
    "I love how naughty you are (In a non sus way). Hehe the rifle story, the bamboo story, even the stuff you pull with me hehe, I love those. Stay that way hehe, never change.",
    "I love how cute you are.. I love when you get cuteness aggression hehe, It makes me go crazy at times with how cute you get. You say it's your childish side, but imo it is a part of you, not a childish part. You are the only adult allowed to be this cute near me hehe lolol.",
    "I love how fierce of a friend you are and how you never give up on friends in front of others.",
    "I love how honest you are. I mean this is a pretty big point for me. I lie soo much I have become a habitual liar. But I try soo much to avoid lying to you. I want the relationship we have to stay true Suziee.",
    "I love how loving and affectionate you get for me. Those muahs, those I makka pakka you, and also the small things like you calling me pookie. Makes me feel very loved hehe."
];

const companyReasons = [
    "I love you Suziee. I love you soo much.",
    "I love your company Suziee, I want to always keep you company. It never feels tiring or boring when I'm with you.",
    "Tbh being bored isnt all that bad. Even if we couldn't find a topic to chat on, I’ll be soo happy just to spend time next to you, even in silence. I love being silent with you Suziee.",
    "I love studying with you Suziee. Being on a discord call with you while studying makes me really motivated, even if we aren't talking about anything.",
    "I love listening to songs with you. You have a banger music taste, and I love listening to songs you like. I'm honestly not a music person, but you made me one Suziee. And on the topic of music",
    "I love your singing soooo damn much I cant talk enough about them. Ahhh If Im dying play one of the songs covered by you and I’ll come back to life hehe.",
    "I love watching movies with you Suziee. Series too. I loved Bridgerton. I loved Eternity. I loved Atrangi Re. I loved Howl’s Moving Castle. I loved When the Wind Rises. I think I love them all because I love you, I love spending time with you and I love your reactions watching them. I wish we could have movie nights irl in the future. Imagine us making popcorns, cooking some snacks, sitting down at 11 in the night after a long day at work, with a long day awaiting tomorrow. Not caring about tomorrow, staying in the moment with you.",
    "I love talking to you on calls Suziee. I love your voice, you sound soo sweet, so soothing too, but your words can provide a nice contrast hehe, with your roasts. I know Im not that good at speaking in calls. And I might be worse in irl. But thats because you allow me to make mistakes and correct them. You give me that space.",
    "I love your book recommendations. I loved Its Complicated and The Kiss Quotient soooooooo much. Kiss Quotient especially. I loved reading those fanfics too hehe. Im sorry I havent read more of your recommendations yet but I will catch up, and pester you about them meanwhile.",
    "On the topics of Fanfics, I loved the romances you have written so far. Its hot and romantic, makes me blush uncontrollably too. Keep writing Suziee.",
    "I love your poems Suziee, the poems you have written for me, the poems you have written about other things. I loved that cadaver poem, it was really touching. I loved the Joymoti poem too, even though I don't have enough experience in Assam to truly feel it.",
    "And I have come to love so many aspects of Assamese Culture through you Suziee, the cuisines, the music, the people, the way marriages happen, Bihu, Saraswati Puja and so much more. I know I have only scratched the surface, and I wish to know more through you.",
    "I love how relatable you are even tho we are kilometers apart in many things hehe, We twin on a lot of things you know, from braces to our political leanings",
    "I love how much you have made me care about things, care about another person, care about you. At the start, I didn't care about anything honestly, Now I've started praying, Suziee. I desperately want a good future now.",
    "And on the topic of caring, I love how much you have made me care about myself too. I've started focusing on studies, going to gym, dressing better than before, skincare, toothcare and everything."
];


const smallThingsReasons = [
    "I love the Good Mornings Suzieee. I can't start my day without seeing your good morning, my day goes dull without you. Somedays I am late, and I’ll prevent that pookie",
    "I love the Good Nights Suziee. I love how we drag the goodnights hehe. I love the gifs and stickers we send during that time.",
    "I love the Makka Pakkas, Milk and Mochas and all the puung stickers and the characters too. You have made me like Makka Pakka a lot. If u are his no 1 fan, I wanna be his no 2. I love how silly we get with it.",
    "And on the topic of stickers, I enjoyed making them hehe. I know a lot of it is hit or miss, but I especially love your baby stickers, my sweet baby. Those stickers are exclusive for us hehe",
    "I love how you start spamming texts when I'm in class hehe. I know you are texrting, I get really tempted to step in the chat window but I get stuck in a dilemma, and I find it fun hehe. My cutiepieee",
    "I loveeee your gifts for friendship day hehe, you did hear me tear up a bit live lol.",
    "I love the hugs, the head pats, the booping my nose and you running around hehe",
    "I love how I wanna keep addressing you as my queen, as my fairy. You are the Queen hehe, the Queen of my Heart.",
    "I'm sorry that I'm saying this but I love how pouty you get when I leave chat due to something hehe. Of course I don't do them with that intent, but I still love seeing you go pouty.",
    "I love how we say Buii buii instead of byee, how we say fis instead of fish, boonunu or banaynay instead of banana. I feel they are soo special yk. We have a language only for us. I wanna have more words for us, exclusive for us",
    "I love how possessive we get for each other hehe. I know you love me go possessive when you tease too hehe."
];


const futureReasons = [
    "First of all, I love how much you think of the future. I love how much you think of choices and consequences. I just don't want you to get stressed about it",
    "I wanna take you on a date someday hehe. I've told you my date plans, you have told your date plans. I desperately hope that and more occur hehe.",
    "I wanna go to the cinemas with you Suziee. For a Marvel movie, for a rom-com movie. I wanna watch your eyes engrossed in the movie hehe. I wanna fight over popcorn with you (Sorry ma’am the popcorn is yours ofcourse). I wanna hear you talk about the movie when the show is over.",
    "I want to eat so many Assamese cuisines with you, and other things too. From Assamese Black Coffee to Duck Fry made by your mom one day. I bet I’ll enjoy them hehe.",
    "I wanna see you irl in so many clothes. I wanna admire you while being just next to you hehe. I wanna melt in front of you seeing you be this beautiful.",
    "I wanna see sunsets with you Suziee. I wanna watch the night sky with you Suziee. I wanna chat with you under the stars. I bet I’ll feel like floating among the stars, seated on the clouds when I'm next to you.",
    "I wanna work with you hehe, if that happens. Hehe that would be fun. I know work might be stressful af, but I wanna hear you rant about it to me.",
    "I wanna read with you Suziee. Maybe a novel, or a subject book. I wanna hear your comments about them as we hold a cup of filter coffee I made for us hehe.",
    "I wanna dance with you Suziee. I wanna hug you Suziee. I wanna pat your head Suziee. I wanna get roasted by you irl. I also wanna make you blush with a romantic poem out of nowhere. Maybe I’ll dose up on PCM lol (Tbh if i wanna write a poem about you I dont need pcm hehe).",
    "I wanna be with you Suziee. I wanna spend all my happy and sad moments next to you Suziee."
    
];

let currentReasons = happyReasons;
let currentReason = 0;

function showReason() {

    reasonText.textContent = currentReasons[currentReason];

    reasonCount.textContent =
        `${currentReason + 1} / ${currentReasons.length}`;

}

document.getElementById("next-btn").addEventListener("click", () => {

    if (currentReason < currentReasons.length - 1) {

        currentReason++;

        showReason();

    }

});

document.getElementById("prev-btn").addEventListener("click", () => {

    if (currentReason > 0) {

        currentReason--;

        showReason();

    }

});

backButton.addEventListener("click", () => {

    reasonPage.style.display = "none";
    categories.style.display = "flex";

    window.scrollTo(0, 0);

});
