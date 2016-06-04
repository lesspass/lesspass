<template>
    <div id="settings-page">
        <div class="row">
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <i class="icon ion-ios-lock"></i> {{ $t('settings.ChangePassword') }}
                    </div>
                    <div class="card-block">
                        <form @submit="changePassword()">
                            <fieldset class="form-group">
                                <label for="current_password">{{ $t('settings.currentPassword') }}</label>

                                <div class="input-group">
                                    <span class="input-group-addon"><i class="icon ion-ios-key"></i></span>
                                    <input type="password" class="form-control" id="current_password"
                                           v-model="credentials.current_password"
                                           placeholder="{{ $t('settings.currentPasswordPlaceholder') }}">
                                </div>
                            </fieldset>
                            <fieldset class="form-group">
                                <label for="new_password">{{ $t('settings.newPassword') }}</label>

                                <div class="input-group">
                                    <span class="input-group-addon"><i class="icon ion-ios-key"></i></span>
                                    <input type="password" class="form-control" id="new_password"
                                           v-model="credentials.new_password"
                                           placeholder="{{ $t('settings.newPasswordPlaceholder') }}">
                                </div>
                            </fieldset>
                            <button type="submit" class="btn btn-primary btn-block">
                                {{ $t('settings.changePasswordButton') }}
                            </button>
                        </form>
                    </div>
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
                if (!this.credentials.current_password || ! this.credentials.new_password){
                     logging.error(this.$t('settings.credentialsMandatory'));
                    return;
                }
                auth.changePassword(this.credentials)
                        .then(()=> {
                            logging.success(this.$t('settings.passwordChangedSuccess'));
                        })
                        .catch(() => {
                            logging.error(this.$t('settings.passwordChangedError'));
                        });
            }
        }
    }
</script>

