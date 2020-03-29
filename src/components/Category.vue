<template>
  <div class="category">
<ul class="list-group">
  <li class="list-group-item disabled">{{ category.name}}</li>
</ul>
</div>
</template>
<script>
export default {
  props: ['category']
  
}

</script>

<style>
.list-group{
    width: 50%;
    height: 50px;
   
}
</style>