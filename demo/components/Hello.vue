<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <b-card>
      <h5>Left drawer displayed as a Reponsive Sidebar. <span class="font-italic">Resize the window to test</span></h5>
    </b-card>
    <br/>
    <b-card class="text-right">
      <h5>Right drawer hidden on page load.</h5>
    </b-card>
    <br/>
    <b-card>
      <h5>Customize button styles</h5>
      <p>Use a style object e.g.</p>
      <pre><code>
       {
          background: 'rgba(150, 5, 0, 0.2)',
          padding: '0 5px',
          marginTop: '56px',
          marginRight: '15px',
          height: '100%',
          top: '0'
        }
      </code></pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue Bootstrap Drawer Example App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
