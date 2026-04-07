# Inputs

|  | Message | Type | Miliseconds |
|--|--|--|--|
| Type | String | String | Integer |
| Example | `"Test Message"` | `"success"` | `5000` |

**Available Types:**
| Name | Color |
|--|--|
| `"success"` | Green |
| `"error"` | Red |
| `"info"` | Blue |


# Calling Notifications
**Calling from client-side script:**
`exports['AxionNotifications']:Notify(MESSAGE[STRING], TYPE[STRING], MILISECONDS[INTEGER])`
**Calling from server-side script to single player:**
`exports['AxionNotifications']:Notify(source, MESSAGE[STRING], TYPE[STRING], MILISECONDS[INTEGER])`
**Calling from server-side script to all players:**
`exports['AxionNotifications']:Notify(-0, MESSAGE[STRING], TYPE[STRING], MILISECONDS[INTEGER])`