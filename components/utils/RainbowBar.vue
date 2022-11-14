<template>
    <div>
        <div :class="`h-1 bg-gradient-to-r w-full ${colors} `"></div>
    </div>
</template>

<script>
export default {
    props: ['colors']
}
</script>
