<template>
    <div id="header">
         
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Charalites  Motors</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input  placeholder="Search"></b-form-input>
                  <span href="#">Home</span>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">Hausa</b-dropdown-item>
                <b-dropdown-item href="#">Yaruba</b-dropdown-item>
                <b-dropdown-item href="#">Igbo</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Header",
    
}
</script>
<style scoped>
.btn{
 background-color: #370bfc;
}
</style>