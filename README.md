![AxionNotifications](https://spunkyman.com/cdn/axion/AxionNotifications_stats.png)

0 ms CPU time at idle.

# AxionNotifications
Custom notification framework to send prettified notifications to the client.

## Inputs
|  | Message | Type | Duration (ms) |
|--|--|--|--|
|         | String | String | Integer |
| Example | `"Test Message"` | `"success"` | `5000` |

**Available Types:**
| Name | Color |
|--|--|
| `"info"` | Blue |
| `"success"` | Bright Green |
| `"error"` | Red |
| `"system"` | Orange |
| `"money"` | Money Green |

## Calling Notifications
**Calling from client-side script:**
`exports['AxionNotifications']:AxionNotify(MESSAGE[STRING], TYPE[STRING], MILISECONDS[INTEGER])`

**Calling from server-side script to single player:**
`exports['AxionNotifications']:AxionNotify(source, MESSAGE[STRING], TYPE[STRING], MILISECONDS[INTEGER])`

**Calling from server-side script to all players:**
<<<<<<< Updated upstream
`exports['AxionNotifications']:Notify(-0, MESSAGE[STRING], TYPE[STRING], MILISECONDS[INTEGER])`
=======
`exports['AxionNotifications']:AxionNotify(-0, MESSAGE[STRING], TYPE[STRING], MILISECONDS[INTEGER])`
>>>>>>> Stashed changes
