# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171113154113) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chest_and_arms", force: :cascade do |t|
    t.integer "bpress"
    t.integer "dbellpress"
    t.integer "seatedmachinechestpress"
    t.integer "inclinebenchcablefly"
    t.integer "barbellcurl"
    t.integer "standingbicepcablecurl"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cores", force: :cascade do |t|
    t.string "crunch"
    t.string "vup"
    t.string "flutterkick"
    t.string "sideplank"
    t.string "russiantwist"
    t.string "vtuck"
    t.string "superman"
    t.string "plank"
    t.string "birddog"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "legs_and_backs", force: :cascade do |t|
    t.integer "deadlift"
    t.integer "lyinglegcurl"
    t.integer "latraise"
    t.integer "tbarrow"
    t.integer "widecablerow"
    t.integer "dbelllunges"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lowerbodies", force: :cascade do |t|
    t.integer "legextensions"
    t.integer "frontsquat"
    t.integer "hacksquat"
    t.integer "dbellstepup"
    t.integer "romaniandeadlift"
    t.integer "lyinglegcurl"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "upperbodies", force: :cascade do |t|
    t.integer "bpress"
    t.integer "bentoverrow"
    t.integer "overheadpress"
    t.integer "latraise"
    t.integer "overheaddbellpress"
    t.integer "tricepextension"
    t.integer "pullups"
    t.string "bicepcurl"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password"
    t.string "email"
    t.float "currentweight"
    t.string "profileimg"
    t.integer "currentbicepsize"
    t.string "profileimg"
    t.integer "currentthighsize"
    t.integer "currentchestsize"
    t.integer "currentwaistsize"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workout_sessions", force: :cascade do |t|
    t.datetime "timestart"
    t.datetime "timeend"
    t.string "workout"
    t.integer "intensity"
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workout_types", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
