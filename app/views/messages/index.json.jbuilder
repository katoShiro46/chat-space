json.array! @new_messages do |message|
  json.id         message.id
  json.comment    message.comment
  json.user_name  message.user.name
  json.image      message.image
  json.created_at message.created_at.strftime("%Y/%m/%d %H:%M")
end
