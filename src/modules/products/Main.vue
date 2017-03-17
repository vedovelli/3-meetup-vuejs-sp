
<script>
    export default {
        name: 'Products',
        computed: {
            categories () {
                return this.$store.state.Categories.list
            }
        }
    }
</script>

<template>
    <div>
        <h3>Produtos</h3>
        <form action="#">
            <label class="control-label">Selecione a categoria</label>
            <select class="form-control">
                <option :value="cat" v-for="cat in categories">{{ cat }}</option>
            </select>
        </form>
    </div>
</template>