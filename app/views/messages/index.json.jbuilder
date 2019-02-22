json.array! @messages do |message|
  json.comment    message.comment
  json.user_name  message.user.name
  json.image      message.image
  json.created_at message.created_at.strftime("%Y/%m/%d %H:%M")
end
