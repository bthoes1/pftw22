<script setup>
    import { reactive } from 'vue';
    import ItemRow from "./components/ItemRow.vue"
    
    const shows = [
        {
                image: 'https://resizing.flixster.com/A1639Z3rsp4GjZHu-LtDoQRhSsU=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p15086357_b_h9_an.jpg', 
                name: 'Killing Eve',
                platform: 'BBC America',
                seasons: '4',
                premise: 'What first feels like a cat-and-mouse spy thriller becomes a complex, psychological drama about the self-destructive relationship between rogue MI6 agent Eve (Sandra Oh) and assassin Villanelle (Jodie Comer). Cinematically stunning and full of award-garnering performances, Killing Eve disrupts simple notions of right and wrong and paints a complicated, sordid, and incredibly compelling picture of human nature.',
                id:1
           },  {
                image: 'https://images-na.ssl-images-amazon.com/images/I/81ZHfvioGVL._RI_.jpg', 
                name: 'What We Do in the Shadows',
                platform: 'FX',
                seasons: '3',
                premise: 'Based on the celebrated mockumentary of the same name, this comedy horror series follows the travails of four egotistical vampires and a long-suffering familiar as they navigate everyday life on Staten Island. Even an existence in the shadows has roommate drama, failed romance, and other situations that define the genre.',
                id:2
           }, {
                image: 'https://gatecrasherspod.files.wordpress.com/2022/02/header-1.png?w=1200', 
                name: 'Murderville',
                platform: 'Netflix',
                seasons: '1',
                premise: 'Senior Detective Terry Seattle (Will Arnett) improvises his way through a different murder mystery in each episode. Joined by a celebrity guest cameo-ing as a detective trainee, it is up to the newly paired-up partners to interview their suspects and solve the case. Trainees include Conan OBrien, Kumail Nanjiani, Marshawn Lynch, Annie Murphy, Sharon Stone, and Ken Jeong.',
                id:3
           }, {
                image: 'https://cinedope.com/wp-content/uploads/2021/03/Mr.-Mayor-1200x675.jpg', 
                name: 'Mr. Mayor',
                platform: 'NBC (Peacock)',
                seasons: '2',
                premise: 'In the vein of 30 Rock, the Office, and Parks and Recreation, comes a workplace comedy about self-centered billionaire-turned-LA-mayor Neil Bremer (Ted Danson) and his hardcore government enthusiast deputy mayor Arpi Meskimen (Holly Hunter). With a stellar ensemble cast and a high joke ratio, this relatively undiscovered gem of a comedy is the latest brain child of Tina Fey.',
                id:4
           }, {
                image: 'https://cdn-www.comingsoon.net/assets/uploads/2021/06/thumbnail_SweetTooth_YouTube_Horiz-e1624551961715.jpg', 
                name: 'Sweet Tooth',
                platform: 'Netflix',
                seasons: '1',
                premise: 'Based on the beloved comic series, this heartfelt post-apocalyptic epic centers on questions of identity and belonging. A hybrid deer-human child ventures out from his isolated home, discovers unlikely friends, and stands up to genocidal forces, all against the backdrop of a virus-devastated country.',
                id:5
        }
    ];
    const newShowObj = {
        image: '',
        name: '',
        platform: '',
        seasons: '',
        premise: '',
    };
    const state = reactive({ shows, newShowObj });
    function addNewShow() {
        state.shows.push({
            image: state.newShowObj.image,
            name: state.newShowObj.name,
            platform: state.newShowObj.platform,
            seasons: state.newShowObj.seasons,
            premise: state.newShowObj.premise,
            id: state.shows.length + 1
        });
        state.newShowObj.image = "";
        state.newShowObj.name = "";
        state.newShowObj.platform = "";
        state.newShowObj.seasons = null;
        state.newShowObj.permise = "";
     };
     function handleDelete(itemToDelete) {
         console.log(itemToDelete.id, itemToDelete.name);
         state.shows = state.shows.filter((itemToCheck) => {
            return itemToDelete !== itemToCheck;
         });
     }
</script>

<template>
  <div class="collection-wrapper">
  <h1>My most recent TV watches</h1>
    <div id="myCollectionApp">
          <table>
            <thead>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Platform</th>
                  <th>Seasons</th>
                  <th>Premise</th>
                  <th class="cell actions">Actions</th>
            </thead>

            <tbody>
                <ItemRow 
                    v-for="(show, idx) in state.shows" 
                    v-bind:key="idx" 
                    v-bind:item="show"
                    v-on:delete-item="handleDelete"
                    v-bind:class="{odd: (idx + 1) % 2 !== 0, even: (idx + 1) % 2 === 0, streaming: show.platform === 'Netflix'}"
                />
            </tbody>
              
          </table>
          <form v-on:submit.prevent="addNewShow" class="new-show-form">
              <fieldset>
                  <legend>Add a show to the collection</legend>
                  <div>
                      <label for="image">Image URL</label>
                      <input id="image" type="text" v-model="newShowObj.image">
                  </div>
                  <div>
                      <label for="name">Name</label>
                      <input id="name" type="text" v-model="newShowObj.name">
                  </div>
                  <div>
                      <label for="platform">Platform</label>
                      <input id="platform" type="text" v-model="newShowObj.platform">
                  </div>
                  <div>
                      <label for="seasons">Seasons</label>
                      <input id="seasons" type="number" v-model="newShowObj.seasons">
                  </div>
                  <div>
                      <label for="premise">Premise</label>
                      <input id="premise" type="text" v-model="newShowObj.premise">
                  </div>
                  <button type="submit">Submit</button>
              </fieldset>
          </form>
      </div>
  </div>
</template>

<style>
    @import url("https://use.typekit.net/gnf2dry.css");

    .collection-wrapper {
        background-color: white;
        color: black;
        width: 80%;
        margin: 0 auto;
        font-family: attribute-text, sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    img {
        width: 300px;
    }

    h1 {
        padding: 50px 0;
    }

    table, thead, th, tbody, tr, td {
        border: 0 none;
        margin: 0;
    }

    thead {
        background-color: white;
    }

    th {
        font-size: 12px;
        text-align: left;
        text-transform: uppercase;
    }

    td {
        padding: 20px;
    }

    .needs-more-space {
        padding-left: 40px;
        padding-right: 40px;
    }

    .new-show-form {
        margin: 20px 0;
    }

    .new-show-form fieldset {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .new-show-form div {
        margin: 10px 0;
        width: 120px;
    }

    .new-show-form label {
        max-width: 120px;
    }

    .new-show-form input {
        max-width: 120px;
        display: block;
    }

    .even {
        background-image: linear-gradient(to bottom right, #D3D3D3, #F5FCFF);
    }

    .odd {
        background-image: linear-gradient(to bottom right, #C8DCF0, #E6F0FF);
    }
    
</style>