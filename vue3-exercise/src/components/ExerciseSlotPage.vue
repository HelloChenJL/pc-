
<script setup>

</script>

<template>
  <slot-comp>
    <h6>你好</h6>
  </lot-comp>
  <slot-name-comp>s
    <template v-slot:left>
      <div>1111</div>
    </template>
    <template v-slot:right>
      <div>2222</div>
    </template>
  </slot-name-comp>
</template>
