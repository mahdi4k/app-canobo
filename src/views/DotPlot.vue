<template>
    <div class="borderTopBottom">
        <div class="container">
            <Header2 />
            <Accordian />
            <Selection />
        </div>
    </div>

</template>

<script>
import Accordian from '@/components/Accordian.vue';
import Selection from '@/components/Selection.vue';
import Header2 from "@/components/Header2.vue";

export default {
    components: { Header2, Accordian, Selection },
}
</script>

<style>
</style>