class V1::ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
end
