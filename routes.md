 GET|HEAD        / ...................................................................................................
  GET|HEAD        api/allroutes .......................................................................................
  POST            api/login .................................................................. Api\AuthController@login
  POST            api/logout ................................................................ Api\AuthController@logout
  POST            api/signup ................................................................ Api\AuthController@signup
  GET|HEAD        api/user ............................................................................................
  GET|HEAD        api/users .................................................... users.index › Api\UserController@index
  POST            api/users .................................................... users.store › Api\UserController@store
  GET|HEAD        api/users/{user} ............................................... users.show › Api\UserController@show
  PUT|PATCH       api/users/{user} ........................................... users.update › Api\UserController@update
  DELETE          api/users/{user} ......................................... users.destroy › Api\UserController@destroy
  GET|HEAD        sanctum/csrf-cookie ............... sanctum.csrf-cookie › Laravel\Sanctum › CsrfCookieController@show
  GET|HEAD        up ..................................................................................................

    Showing [13] routes
