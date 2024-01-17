// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { LayoutData } from "@foxglove/studio-base/context/CurrentLayoutContext/actions";
// import { defaultPlaybackConfig } from "@foxglove/studio-base/providers/CurrentLayoutProvider/reducers";

/**
 * Overridden default layout that may have been provided when self-hosting via Docker
 * */
const staticDefaultLayout = (globalThis as { FOXGLOVE_STUDIO_DEFAULT_LAYOUT?: LayoutData })
  .FOXGLOVE_STUDIO_DEFAULT_LAYOUT;

/**
 * This is loaded when the user has no layout selected on application launch
 * to avoid presenting the user with a blank layout.
 */
export const defaultLayout: LayoutData =
  staticDefaultLayout ??
  ({
    configById: {
      "sceneUpdateConverter.MissionControl!42bvmhp": {},
      "3d-observation.MissionObservation!3i0r4xz": {},
      "3D!2uba80b": {
        cameraState: {
          perspective: true,
          distance: 18.999999999999932,
          phi: 59.99999999999994,
          thetaOffset: 45.00000000000001,
          targetOffset: [-0.049764002328999704, -0.04976400232899971, 0],
          target: [0, 0, 0],
          targetOrientation: [0, 0, 0, 1],
          fovy: 45,
          near: 0.5,
          far: 5000,
        },
        followMode: "follow-pose",
        scene: {},
        transforms: {},
        topics: {
          "/robot_description": {
            visible: true,
          },
          "/planning/scenario_planning/trajectory": {
            visible: true,
          },
          "/planning/scenario_planning/lane_driving/motion_planning/obstacle_stop_planner/virtual_wall":
            {
              visible: true,
            },
          "/planning/scenario_planning/lane_driving/motion_planning/obstacle_avoidance_planner/virtual_wall":
            {
              visible: true,
            },
          "/planning/scenario_planning/lane_driving/behavior_planning/path": {
            visible: true,
          },
          "/planning/scenario_planning/lane_driving/behavior_planning/behavior_velocity_planner/virtual_wall/traffic_light":
            {
              visible: true,
            },
          "/planning/scenario_planning/lane_driving/behavior_planning/behavior_velocity_planner/virtual_wall/no_stopping_area":
            {
              visible: true,
            },
          "/planning/scenario_planning/lane_driving/behavior_planning/behavior_velocity_planner/virtual_wall/merge_from_private":
            {
              visible: true,
            },
          "/planning/scenario_planning/lane_driving/behavior_planning/behavior_velocity_planner/virtual_wall/intersection":
            {
              visible: true,
            },
          "/planning/scenario_planning/lane_driving/behavior_planning/behavior_velocity_planner/virtual_wall/detection_area":
            {
              visible: true,
            },
          "/planning/scenario_planning/lane_driving/behavior_planning/behavior_velocity_planner/virtual_wall/crosswalk":
            {
              visible: true,
            },
          "/planning/scenario_planning/lane_driving/behavior_planning/behavior_velocity_planner/virtual_wall/blind_spot":
            {
              visible: true,
            },
          "/planning/mission_planning/echo_back_goal_pose": {
            visible: true,
          },
          "/perception/obstacle_segmentation/pointcloud": {
            visible: true,
            colorField: "x",
            colorMode: "colormap",
            colorMap: "turbo",
          },
          "/perception/object_recognition/objects": {
            visible: true,
          },
          "/map/vector_map_marker": {
            visible: true,
            namespaces: {
              lanelet_id: {
                visible: false,
              },
              road_lanelets: {
                visible: true,
              },
            },
          },
        },
        layers: {},
        publish: {
          type: "point",
          poseTopic: "/move_base_simple/goal",
          pointTopic: "/clicked_point",
          poseEstimateTopic: "/initialpose",
          poseEstimateXDeviation: 0.5,
          poseEstimateYDeviation: 0.5,
          poseEstimateThetaDeviation: 0.26179939,
        },
        imageMode: {},
      },
      "Image!3vouh49": {
        cameraState: {
          distance: 20,
          perspective: true,
          phi: 60,
          target: [0, 0, 0],
          targetOffset: [0, 0, 0],
          targetOrientation: [0, 0, 0, 1],
          thetaOffset: 45,
          fovy: 45,
          near: 0.5,
          far: 5000,
        },
        followMode: "follow-pose",
        scene: {},
        transforms: {},
        topics: {},
        layers: {},
        publish: {
          type: "point",
          poseTopic: "/move_base_simple/goal",
          pointTopic: "/clicked_point",
          poseEstimateTopic: "/initialpose",
          poseEstimateXDeviation: 0.5,
          poseEstimateYDeviation: 0.5,
          poseEstimateThetaDeviation: 0.26179939,
        },
        imageMode: {
          imageTopic: "/lucid_vision/front_left_camera/image_compressed",
        },
      },
      "Image!r20uql": {
        cameraState: {
          distance: 20,
          perspective: true,
          phi: 60,
          target: [0, 0, 0],
          targetOffset: [0, 0, 0],
          targetOrientation: [0, 0, 0, 1],
          thetaOffset: 45,
          fovy: 45,
          near: 0.5,
          far: 5000,
        },
        followMode: "follow-pose",
        scene: {},
        transforms: {},
        topics: {},
        layers: {},
        publish: {
          type: "point",
          poseTopic: "/move_base_simple/goal",
          pointTopic: "/clicked_point",
          poseEstimateTopic: "/initialpose",
          poseEstimateXDeviation: 0.5,
          poseEstimateYDeviation: 0.5,
          poseEstimateThetaDeviation: 0.26179939,
        },
        imageMode: {
          imageTopic: "/lucid_vision/front_camera/image_compressed",
        },
      },
      "Image!262or4h": {
        cameraState: {
          distance: 20,
          perspective: true,
          phi: 60,
          target: [0, 0, 0],
          targetOffset: [0, 0, 0],
          targetOrientation: [0, 0, 0, 1],
          thetaOffset: 45,
          fovy: 45,
          near: 0.5,
          far: 5000,
        },
        followMode: "follow-pose",
        scene: {},
        transforms: {},
        topics: {},
        layers: {},
        publish: {
          type: "point",
          poseTopic: "/move_base_simple/goal",
          pointTopic: "/clicked_point",
          poseEstimateTopic: "/initialpose",
          poseEstimateXDeviation: 0.5,
          poseEstimateYDeviation: 0.5,
          poseEstimateThetaDeviation: 0.26179939,
        },
        imageMode: {
          imageTopic: "/lucid_vision/front_right_camera/image_compressed",
        },
      },
      "Tab!3jh9nmc": {
        activeTabIdx: 0,
        tabs: [
          {
            title: "Home",
            layout: "sceneUpdateConverter.MissionControl!42bvmhp",
          },
          {
            title: "My Drive",
            layout: {
              first: "3d-observation.MissionObservation!3i0r4xz",
              second: {
                first: "3D!2uba80b",
                second: {
                  first: "Image!3vouh49",
                  second: {
                    first: "Image!r20uql",
                    second: "Image!262or4h",
                    direction: "row",
                    splitPercentage: 50,
                  },
                  direction: "row",
                  splitPercentage: 33.3333333333,
                },
                direction: "column",
                splitPercentage: 70,
              },
              direction: "row",
              splitPercentage: 23.5,
            },
          },
          {
            title: "Account",
            layout: "sceneUpdateConverter.MissionControl!42b2mhp",
          },
        ],
      },
    },
    globalVariables: {},
    userNodes: {},
    playbackConfig: {
      speed: 1,
    },
    layout: "Tab!3jh9nmc",
  } as const);
