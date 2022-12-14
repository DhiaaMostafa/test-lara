@extends('layout.main')
@section('body')
      <div class="page-header">
        <div class="container">
          <div class="row">         
            <div class="col-lg-12">
              <div class="inner-header">
                <h3>Login</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="content" class="section-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-6 col-xs-12">
              <div class="page-login-form box">
                <h3>
                  Login
                </h3>
                <form class="login-form">
                  <div class="form-group">
                    <div class="input-icon">
                      <i class="lni-user"></i>
                      <input type="text" id="sender-email" class="form-control" name="email" placeholder="Username">
                    </div>
                  </div> 
                  <div class="form-group">
                    <div class="input-icon">
                      <i class="lni-lock"></i>
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                  </div> 
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Keep Me Signed In</label>
                  </div>
                  <button class="btn btn-common log-btn">Submit</button>
                </form>
                <ul class="form-links">
                  <li class="text-center"><a href="register.html">Don't have an account?</a></li>
                </ul>
                <ul class="mt-3 footer-social text-center">
                    <li><a class="facebook" href="#"><i class="lni-facebook-filled"></i></a></li>
                    <li><a class="twitter" href="#"><i class="lni-twitter-filled"></i></a></li>
                    <li><a class="linkedin" href="#"><i class="lni-linkedin-fill"></i></a></li>
                    <li><a class="google-plus" href="#"><i class="lni-google-plus"></i></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </section>


@endsection
 