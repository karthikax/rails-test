# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

computes = Compute.create([
	{
		name: 'Nano',
		power: '1vCPU',
		memory: '512MB',
		speed: '1GHz',
		storage: '100GB',
	},
	{
		name: 'Micro',
		power: '1vCPU',
		memory: '1GB',
		speed: '1GHz',
		storage: '250GB',
	},
	{
		name: 'Small',
		power: '1vCPU',
		memory: '2GB',
		speed: '2GHz',
		storage: '500GB',
	},
	{
		name: 'Medium',
		power: '2vCPU',
		memory: '4GB',
		speed: '2GHz',
		storage: '1TB',
	},
	{
		name: 'Large',
		power: '2vCPU',
		memory: '8GB',
		speed: '2GHz',
		storage: '2TB',
	},
	{
		name: 'xLarge',
		power: '4vCPU',
		memory: '16GB',
		speed: '3GHz',
		storage: '4TB',
	},
	{
		name: '2xLarge',
		power: '8vCPU',
		memory: '32GB',
		speed: '4GHz',
		storage: '8TB',
	},
])
