mul.set( "loginform" , {
    template: `
    <div style="padding:1em"><form class="pure-form pure-form-stacked">
    <fieldset>
        <legend>{{title}} - Loginform.js ASYNC LOADED</legend>

        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Email">
        <span class="pure-form-message">This is a required field.</span>

        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Password">

        <label for="state">State</label>
        <select id="state">
            <option>AL</option>
            <option>CA</option>
            <option>IL</option>
        </select>

        <label for="remember" class="pure-checkbox">
            <input id="remember" type="checkbox"> Remember me
        </label>

        <button type="submit" class="pure-button pure-button-primary">Sign in</button>
    </fieldset>
</form>
</div>`,
	props:["title"]
});