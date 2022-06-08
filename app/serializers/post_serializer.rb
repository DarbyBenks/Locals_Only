class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :img_url, :description, :location
end
