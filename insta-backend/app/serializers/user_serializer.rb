class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :phoneNum, :email, :image

  has_many :posts
  has_many :likes, through: :posts
  has_many :comments, through: :posts

  include Rails.application.routes.url_helpers
  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
