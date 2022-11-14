<template>
  <div>
    <svg :class="`${options} fill-current`" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path d="M0 0h234.667v512H0zM277.333 0H512v234.667H277.333zM277.333 277.333H512V512H277.333z"/></svg>
  </div>
</template>


<script>
  export default {
    props: ['options']
  }
</script>
