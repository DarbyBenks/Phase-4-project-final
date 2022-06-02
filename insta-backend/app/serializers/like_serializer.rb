class LikeSerializer < ActiveModel::Serializer
  attributes :id, :totalLikes, :user_id, :post_id

  belongs_to :user
  belongs_to :post
end
