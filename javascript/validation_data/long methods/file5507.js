var t = function(domComponentOrNode, eventData) {
    var node;
    invariant(
        !React.isValidElement(domComponentOrNode),
        'TestUtils.Simulate expects a component instance and not a ReactElement.' +
        'TestUtils.Simulate will not work if you are using shallow rendering.'
    );
    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
        node = findDOMNode(domComponentOrNode);
    } else if (domComponentOrNode.tagName) {
        node = domComponentOrNode;
    }
    var dispatchConfig =
        EventPluginRegistry.eventNameDispatchConfigs[eventType];
    var fakeNativeEvent = new Event();
    fakeNativeEvent.target = node;
    var event = new SyntheticEvent(
        dispatchConfig,
        ReactDOMComponentTree.getInstanceFromNode(node),
        fakeNativeEvent,
        node
    );
    event.persist();
    Object.assign(event, eventData);
    if (dispatchConfig.phasedRegistrationNames) {
        EventPropagators.accumulateTwoPhaseDispatches(event);
    } else {
        EventPropagators.accumulateDirectDispatches(event);
    }
    ReactUpdates.batchedUpdates(function() {
        EventPluginHub.enqueueEvents(event);
        EventPluginHub.processEventQueue(true);
    });
}