<template>
<div class="category">
<b-list-group>
  <b-list-group-item > {{ category.name }}</b-list-group-item>
</b-list-group>
</div>
</template>
<script>
export default {
  props: ['category']
  
}

</script>

<style>
.category{
    height: 53px;
     margin-left: 5em;
    
   
}
</style>