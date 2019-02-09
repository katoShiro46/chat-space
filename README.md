## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true,null: false, unique: true|
|email|string|null: false|

### Association
  has_many :groups,through: members
  has_many :messages
  has_many :members


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|comment|string|index: true,null: false|
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
  belongs_to :user
  belongs_to :group


## memberテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
  belongs_to :group
  belongs_to :user


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true|

### Association
  has_many :users,through: members
  has_many :members
  has_many :messages
