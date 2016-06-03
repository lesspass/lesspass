<template>
    <div id="settings-page">
        <div class="row">
            <div class="col-md-8 col-lg-4">
                <div class="card card-block">
                    <h4 class="card-title">Password Management</h4>

                    <form @submit="changePassword()">
                        <fieldset class="form-group">
                            <label for="current_password">Current password</label>

                            <div class="input-group">
                                <span class="input-group-addon"><i class="icon ion-ios-key"></i></span>
                                <input type="password" class="form-control" id="current_password"
                                       v-model="credentials.current_password"
                                       placeholder="Enter your current password">
                            </div>
                        </fieldset>
                        <fieldset class="form-group">
                            <label for="new_password">New Password</label>

                            <div class="input-group">
                                <span class="input-group-addon"><i class="icon ion-ios-key"></i></span>
                                <input type="password" class="form-control" id="new_password"
                                       v-model="credentials.new_password"
                                       placeholder="Enter your new password">
                            </div>
                        </fieldset>
                        <button type="submit" class="btn btn-primary btn-block">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import auth from '../services/auth';
    import logging from '../services/logging';

    export default {
        methods: {
            changePassword(){
                auth.changePassword(this.credentials)
                        .then(()=> {
                            logging.success('password successfully changed');
                        })
                        .catch(() => {
                            logging.error('current password is invalid or your new password is too weak');
                        });
            }
        }
    }
</script>

