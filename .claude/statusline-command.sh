#!/bin/bash
# Claude Code status line: context remaining and rate limits

input=$(cat)

# Context remaining
remaining=$(echo "$input" | jq -r '.context_window.remaining_percentage // empty')
used=$(echo "$input" | jq -r '.context_window.used_percentage // empty')

# Rate limits
five=$(echo "$input" | jq -r '.rate_limits.five_hour.used_percentage // empty')
week=$(echo "$input" | jq -r '.rate_limits.seven_day.used_percentage // empty')

# Model display name
model=$(echo "$input" | jq -r '.model.display_name // empty')

parts=()

if [ -n "$model" ]; then
  parts+=("$model")
fi

if [ -n "$remaining" ]; then
  used_int=$(printf '%.0f' "$used")
  remaining_int=$(printf '%.0f' "$remaining")
  parts+=("Context: ${used_int}% used / ${remaining_int}% left")
fi

if [ -n "$five" ] || [ -n "$week" ]; then
  limits=""
  [ -n "$five" ] && limits="5h:$(printf '%.0f' "$five")%"
  [ -n "$week" ] && limits="$limits 7d:$(printf '%.0f' "$week")%"
  limits=$(echo "$limits" | sed 's/^ //')
  parts+=("Limits: $limits")
fi

# Join parts with " | "
output=""
for part in "${parts[@]}"; do
  if [ -z "$output" ]; then
    output="$part"
  else
    output="$output | $part"
  fi
done

echo "$output"
