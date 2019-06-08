<template>
    <!-- Modal -->
    <div id="loginModal" class="modal fade" role="dialog">
    <div class="modal-dialog fixed-modal">

        <!-- Modal content-->
        <div class="modal-content" style="position: fixed">
            <div class="modal-body">
                <div class="panel panel-default">
                    <div class="panel-heading">Basic Form</div>
                    <div class="panel-body">
                        <form role="form">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <div class="checkbox custom-checkbox"><label><input type="checkbox"><span class="fa fa-check"></span> Check me out</label></div>
                            <a href="#" class="btn btn-green">Submit</a>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
    </div>
</template>

<script>
export default {
    name: "LoginModal"

}
</script>

<style>
    .images-poster{
        margin-bottom: 20px;
    }
    .profile-img {
        border-radius: 50%;
    }
</style>
