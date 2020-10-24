FactoryBot.define do
  factory :member do
    famil_name { Faker::Name.name }
    given_name { Faker::Name.name }
    birthdate { Faker::Date.between(from: '1990-01-01', to: '3000-12-31') }
  end
end
