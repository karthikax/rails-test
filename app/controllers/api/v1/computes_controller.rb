module Api
	module V1
		class ComputesController < ApplicationController
			def index
				computes = Compute.all
				render json: ComputeSerializer.new( computes ).serialized_json
			end
		end
	end
end
