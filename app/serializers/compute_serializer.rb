class ComputeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :power, :memory, :speed, :storage
end
