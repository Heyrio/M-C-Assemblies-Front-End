<template>
    <div class="home">
      <div>
  <!-- Image and text -->
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <img src="../assets/mc.jpg" class="d-inline-block align-top" alt="Kitten">
    </b-navbar-brand>
  </b-navbar>
</div>
  <!-- Container 1-->
     <b-container>
      <b-row>
        <b-col><h1 class="welcome">Welcome Please Sign In</h1></b-col>
     </b-row>
    </b-container>
    <!-- Container 2 form-->
        <b-container>
          <b-row>
            <b-col>
              <h1>
                <div class="card">
                </div>
              </h1>
            </b-col>
         </b-row>
        </b-container>
    
    <!--ROW 1-->
    <div class="mt-4 columns cont">
      <div class="column">
        <div class="field">
          <label class="label">First Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label"> Last Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Email</label>
            <div class="control">
             <input class="input" type="email" placeholder="Text input">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Phone Number</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
        </div>
      </div>
    </div>

    <!--Drop Down-->
    <div class="mt-4 columns cont">
      <div class="column">
        <div class="field">
          <label class="label">Person to see</label>
           <div class="field">
                  <div class="select">
                    <select>
                      <option>Kyle Gush</option>
                      <option>Unknown</option>
                    </select>
                  </div>
              </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Purpose of visit</label>
            <div class="field">
                  <div class="select">
                    <select>
                      <option>Job Interview</option>
                      <option>Other</option>
                    </select>
                  </div>
              </div>
            </div>
      </div>
      <div class="column">
        <div class="field">
            <div class="control">
            </div>
          </div>
      </div>
      <div class="column">
        <div class="field">
            <div class="control is-pulled-right">
              <button class=" mt-5 btn btn-primary">Submit</button>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'home',
  components:{
   
  },

}
</script>

<style scoped>
  .welcome{
    font-size: 2.5em;
    margin-bottom: 3%;
  }
  .cont{
    padding-left: 5%;
    padding-right: 5%;
  }
</style>