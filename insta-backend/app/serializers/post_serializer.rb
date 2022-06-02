class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :location, :image

  belongs_to :user
  has_many :likes 
  has_many :comments

  include Rails.application.routes.url_helpers
  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
