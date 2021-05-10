class PagesController < ApplicationController
	layout "application"

	def index
		@app_props = { name: "Stranger" }
	end
end
