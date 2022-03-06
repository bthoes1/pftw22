let vm = new Vue({
    el: "#myCollectionApp",
    data: {
        shows: [
            {
                image: 'https://resizing.flixster.com/A1639Z3rsp4GjZHu-LtDoQRhSsU=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p15086357_b_h9_an.jpg', 
                name: 'Killing Eve',
                platform: 'BBC America',
                seasons: '4',
                premise: 'What first feels like a cat-and-mouse spy thriller becomes a complex, psychological drama about the self-destructive relationship between rogue MI6 agent Eve (Sandra Oh) and assassin Villanelle (Jodie Comer). Cinematically stunning and full of award-garnering performances, Killing Eve disrupts simple notions of right and wrong and paints a complicated, sordid, and incredibly compelling picture of human nature.'
           },  {
                image: 'https://images-na.ssl-images-amazon.com/images/I/81ZHfvioGVL._RI_.jpg', 
                name: 'What We Do in the Shadows',
                platform: 'FX',
                seasons: '3',
                premise: 'Based on the celebrated mockumentary of the same name, this comedy horror series follows the travails of four egotistical vampires and a long-suffering familiar as they navigate everyday life on Staten Island. Even an existence in the shadows has roommate drama, failed romance, and other situations that define the genre.'
           }, {
                image: 'https://gatecrasherspod.files.wordpress.com/2022/02/header-1.png?w=1200', 
                name: 'Murderville',
                platform: 'Netflix',
                seasons: '1',
                premise: 'Senior Detective Terry Seattle (Will Arnett) improvises his way through a different murder mystery in each episode. Joined by a celebrity guest cameo-ing as a detective trainee, it is up to the newly paired-up partners to interview their suspects and solve the case. Trainees include Conan OBrien, Kumail Nanjiani, Marshawn Lynch, Annie Murphy, Sharon Stone, and Ken Jeong.'
           }, {
                image: 'https://cinedope.com/wp-content/uploads/2021/03/Mr.-Mayor-1200x675.jpg', 
                name: 'Mr. Mayor',
                platform: 'NBC (Peacock)',
                seasons: '2',
                premise: 'In the vein of 30 Rock, the Office, and Parks and Recreation, comes a workplace comedy about self-centered billionaire-turned-LA-mayor Neil Bremer (Ted Danson) and his hardcore government enthusiast deputy mayor Arpi Meskimen (Holly Hunter). With a stellar ensemble cast and a high joke ratio, this relatively undiscovered gem of a comedy is the latest brain child of Tina Fey.'
           }, {
                image: 'https://cdn-www.comingsoon.net/assets/uploads/2021/06/thumbnail_SweetTooth_YouTube_Horiz-e1624551961715.jpg', 
               name: 'Sweet Tooth',
               platform: 'Netflix',
               seasons: '1',
               premise: 'Based on the beloved comic series, this heartfelt post-apocalyptic epic centers on questions of identity and belonging. A hybrid deer-human child ventures out from his isolated home, discovers unlikely friends, and stands up to genocidal forces, all against the backdrop of a virus-devastated country.' 
           }
        ]
    }
})