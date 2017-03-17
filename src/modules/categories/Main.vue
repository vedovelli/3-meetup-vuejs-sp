
<script>
    export default {
        name: 'Categories',
        data() {
          return {
            category: '',
          }
        },
        computed: {
            categories () {
                return this.$store.state.Categories.list
            }
        },
        methods: {
            add() {
                if (this.category !== '') {
                    this.$store.commit('CATEGORY_ADD', this.category)
                    this.category = ''
                    this.$refs.category.focus()
                }
            },
        },
    }
</script>

<template>
    <div>
        <h3>Categorias</h3>
        <form @submit.prevent="add">
            <div class="form-group">
              <label class="control-label">Categoria</label>
              <input autofocus ref="category" type="text" class="form-control" v-model="category">
            </div>
            <button class="btn btn-default btn-xs" type="submit">Salvar</button>
        </form>
        <hr v-show="this.categories.length > 0">
        <div class="col-md-4" v-for="cat in categories">
            <div class="panel panel-default">
                <div class="panel-body">
                    {{ cat }}
                </div>
            </div>
        </div>
    </div>
</template>